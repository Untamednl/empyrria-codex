/* Netlify Identity: any page → /admin/invite.html when hash carries Identity tokens. */
(function () {
  console.log("identity redirect script loaded");
  var h = window.location.hash || "";
  if (
    h.indexOf("invite_token=") === -1 &&
    h.indexOf("recovery_token=") === -1 &&
    h.indexOf("confirmation_token=") === -1
  ) {
    return;
  }
  const target = new URL("/admin/invite.html" + h, window.location.origin).toString();
  console.log("identity token detected", target);
  window.location.replace(target);
})();
