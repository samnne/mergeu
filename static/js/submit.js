const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await fetch("/", {
    method: "POST",
    body: new FormData(form),
  });
  if (!response.ok) {
    // alert failure
    return;
  }

  const blob = await response.blob();
  const filename =
    response.headers
      .get("Content-Disposition")
      ?.split("filename=")[1]
      ?.replace(/["']/g, "") || "output.pdf";

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
});

