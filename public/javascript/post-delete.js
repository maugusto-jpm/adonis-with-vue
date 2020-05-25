const deleteLinks = document.getElementsByClassName("delete-post-link");

Array.prototype.forEach.call(deleteLinks, (link) => {
  link.onclick = () => {
    const response = confirm("Deseja realmente excluir esta postagem?");

    if (response === true) {
      window.location.replace(`/posts/${link.id}/delete`);
    }
  };
})
