let d = new Dialog({
  title: "Show Title Crawl",
  content: `<p>Enter Session Number</p>
    <input name="session" class="session" type="text" value="" data-dtype="String" />
    `,
  buttons: {
    show: {
      icon: '<i class="fas fa-check"></i>',
      label: "Show",
      callback: (html) => {
        let session = parseInt(html.find(".session").val(), 10);
        if (isNaN(session)) {
          console.log("Not a valid session number");
          return;
        }
        let url = "https://<your-foundry-vtt-server>/resources/star-wars-crawl/index.html#sessions/session-" + session;
        window.Ardittristan.InlineViewer.sendUrl(url, false, 1920, 1080, "Title Crawl", null, []);
      }
    },
    two: {
      icon: '<i class="fas fa-times"></i>',
      label: "Cancel",
      callback: () => console.log("cancelled")
    }
  },
  default: "two",
  close: () => console.log("cancelled")
});
d.render(true);
