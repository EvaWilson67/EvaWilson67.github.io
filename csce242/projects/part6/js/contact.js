/*Contact Page Submit information*/
const element = document.getElementById("btn-submit");
if (element) {
  document.getElementById("btn-submit").onclick = () => {
    document.getElementById("submission-response").innerHTML =
      "Submission Sent!";
  };
}