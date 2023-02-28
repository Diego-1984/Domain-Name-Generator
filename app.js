window.onload = () => {
  //write your code here
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const subjet = ["jogger", "racoon"];
  const extension = [".com", ".es", ".it", ".de"];
  newDomain(pronoun, adj, subjet, extension);
};

function newDomain(pronoun, adj, subjet, extension) {
  pronoun.forEach(pronoun => {
    adj.forEach(adj => {
      subjet.forEach(subjet => {
        extension.forEach(extension => {
          const div = document.createElement("div");
          div.innerText = `${pronoun}${adj}${subjet}${extension}`;
          document.body.appendChild(div);
        });
      });
    });
  });
}