// Función para mostrar los comentarios en la página
function displayComments() {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';

    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(commentText => {
        const commentElement = document.createElement('div');
        commentElement.className = 'd-flex mb-4';

        const commentHtml = `
            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
            <div class="ms-3">
                <div class="fw-bold">Commenter Name</div>
                ${commentText}
            </div>
        `;

        commentElement.innerHTML = commentHtml;
        commentsContainer.appendChild(commentElement);
    });
}

// Agregar un comentario cuando el usuario envíe el formulario
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const newComment = commentInput.value;

    // Almacenar el comentario en el almacenamiento local
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));

    commentInput.value = '';
    displayComments();
});

// Mostrar los comentarios al cargar la página
displayComments();
