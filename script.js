document.addEventListener("DOMContentLoaded", () => {
    const editor = new Quill("#editor", {
        theme: "snow",
    });

    const saveBtn = document.querySelector(".save-btn");
    const clearBtn = document.querySelector(".clear-btn");
    const viewNotesBtn = document.querySelector(".view-notes");
    const newNoteBtn = document.querySelector(".new-note");
    const noteList = document.querySelector(".note-list");

    saveBtn.addEventListener("click", () => {
        const noteContent = editor.root.innerHTML;
        if (noteContent.trim() === "<p><br></p>") {
            alert("Note is empty!");
            return;
        }
        localStorage.setItem(`note-${Date.now()}`, noteContent);
        alert("Note saved!");
    });

    clearBtn.addEventListener("click", () => {
        editor.root.innerHTML = "";
    });

    viewNotesBtn.addEventListener("click", () => {
        noteList.innerHTML = "";
        for (let key in localStorage) {
            if (key.startsWith("note-")) {
                const noteItem = document.createElement("div");
                noteItem.className = "note-item";
                noteItem.innerHTML = localStorage[key];
                noteList.appendChild(noteItem);
            }
        }
    });

    newNoteBtn.addEventListener("click", () => {
        editor.root.innerHTML = "";
    });
});
