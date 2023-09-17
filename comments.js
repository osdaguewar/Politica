// Array para almacenar los comentarios (carga los comentarios almacenados previamente o inicia un array vacío)
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// Obtén los elementos del formulario y el contenedor de comentarios
const commentText = document.querySelector("textarea");
const submitComment = document.querySelector("button[type='submit']");
const commentContainer = document.querySelector(".d-flex.mb-4");

// Evento al hacer clic en "Comentar"
submitComment.addEventListener("click", () => {
    // Obtén el texto del comentario
    const commentContent = commentText.value.trim(); // Elimina espacios en blanco al principio y al final

    if (commentContent !== "") { // Verifica que el comentario no esté vacío
        // Obtiene la fecha actual
        const date = new Date();

        // Crea un objeto de comentario
        const newComment = {
            author: "Nombre del Autor", // Puedes reemplazar esto con el nombre del autor real
            content: commentContent,
            date: date.toISOString(),
        };

        // Agrega el comentario al array
        comments.push(newComment);

        // Limpia el cuadro de texto del comentario
        commentText.value = "";

        // Actualiza la vista de comentarios
        displayComments();

        // Guarda los comentarios en el almacenamiento local del navegador
        saveCommentsToLocalStorage(comments);
    }
});

// Función para mostrar los comentarios en la página
function displayComments() {
    commentContainer.innerHTML = ""; // Borra los comentarios anteriores

    comments.forEach((comment, index) => {
        const commentDiv = document.createElement("div");
        commentDiv.innerHTML = `
            <!-- Comment with nested comments-->
            <div class="d-flex mb-4">
                <!-- Parent comment-->
                <div class="flex-shrink-0"><img class="rounded-circle" src="imagen/CM${index + 1}.jpg" alt="..." /></div>
                <div class="ms-3">
                    <div class="fw-bold">${comment.author}</div>
                    <p>${comment.content}</p>
                    <small>${comment.date}</small>
                </div>
            </div>
        `;
        commentContainer.appendChild(commentDiv);
    });
}

// Función para guardar los comentarios en el almacenamiento local del navegador
function saveCommentsToLocalStorage(comments) {
    // Convierte los comentarios a formato JSON
    const jsonComments = JSON.stringify(comments);

    // Almacena el JSON en el almacenamiento local
    localStorage.setItem("comments", jsonComments);
}

// Carga los comentarios desde el almacenamiento local al cargar la página
displayComments();
