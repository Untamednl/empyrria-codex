(function () {
  function redirectIdentityToken() {
    try {
      const href = window.location.href || "";
      const hashIndex = href.indexOf("#");
      let rawHash = hashIndex >= 0 ? href.slice(hashIndex) : "";
      if (!rawHash) {
        rawHash = window.location.hash || "";
      }

      console.log("[identity] href (source):", href);
      console.log("[identity] raw hash:", rawHash);

      if (
        !rawHash ||
        (!rawHash.includes("invite_token=") &&
          !rawHash.includes("recovery_token=") &&
          !rawHash.includes("confirmation_token="))
      ) {
        return;
      }

      const target =
        window.location.origin + "/admin/invite.html" + rawHash;

      console.log("[identity] redirect target:", target);

      window.location.href = target;
    } catch (err) {
      console.error("[identity] redirect failure:", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", redirectIdentityToken);
  } else {
    redirectIdentityToken();
  }
})();
