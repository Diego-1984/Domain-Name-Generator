window.onload = () => {
  //write your code here
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const subjet = ["jogger", "racoon"];
  const extension = [".com", ".es", ".it", ".de"];
  newDomain(pronoun, adj, subjet, extension);
};

function newDomain(pronoun, adj, subjet, extension) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < subjet.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          
          console.log(pronoun[i] + adj[j] + subjet[k] + extension[l]);
        }
      }
    }
  }
}