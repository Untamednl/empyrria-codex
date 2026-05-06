(function () {
  function getSlugFromDom(forID) {
    if (typeof document === "undefined") return "";
    var el = document.getElementById(forID);
    if (!el) return "";
    var cur = el.parentElement;
    while (cur && cur.tagName !== "BODY") {
      var slugInput = cur.querySelector('[id^="slug-field-"]');
      if (slugInput && !el.contains(slugInput)) {
        return String(slugInput.value != null ? slugInput.value : "").trim();
      }
      cur = cur.parentElement;
    }
    return "";
  }

  function registerPreviewLinkWidget() {
    if (!window.CMS || !window.h) return;

    var h = window.h;
    var createClass = window.createClass;
    if (!createClass) return;

    var PreviewLinkControl = createClass({
      /**
       * UI-only: never call this.props.onChange — no draft value is written.
       * getValidateValue keeps the field logically empty for validation (pattern ^$).
       */
      getValidateValue: function () {
        return "";
      },
      shouldComponentUpdate: function () {
        return true;
      },
      render: function () {
        var parent = this.props.parent;
        var forID = this.props.forID;

        var slug = "";

        if (parent && parent.get) {
          slug = parent.get("slug") || "";
        }

        if (!slug) {
          slug = getSlugFromDom(forID);
        }

        var url = slug ? "http://localhost:4321/sigils/" + slug : "";

        return h(
          "div",
          {
            id: forID,
            style: {
              padding: "12px",
              border: "1px solid #333",
              borderRadius: "8px",
              background: "#111",
              color: "#fff",
              margin: "8px 0",
            },
          },
          [
            h("div", { style: { marginBottom: "8px", fontWeight: "bold" } }, "Live Preview"),
            slug
              ? h(
                  "a",
                  {
                    href: url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      background: "#7c3aed",
                      color: "#fff",
                      textDecoration: "none",
                    },
                  },
                  "Open " + slug,
                )
              : h("div", {}, "Enter a slug first."),
          ],
        );
      },
    });

    window.CMS.registerWidget("preview-link", PreviewLinkControl);

    if (typeof window.CMS.registerWidgetValueSerializer === "function") {
      window.CMS.registerWidgetValueSerializer("preview-link", {
        serialize: function () {
          return undefined;
        },
        deserialize: function () {
          return undefined;
        },
      });
    }
  }

  if (window.CMS) {
    registerPreviewLinkWidget();
  } else {
    document.addEventListener("DOMContentLoaded", registerPreviewLinkWidget);
  }
})();
