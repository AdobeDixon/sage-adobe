export default function decorate(block) {
  const iframe = document.createElement("iframe");
  iframe.src = "/index.html";
  iframe.setAttribute(
    "style",
    "position:fixed;inset:0;width:100vw;height:100vh;border:0;z-index:99999;background:#0a0a0a;"
  );
  document.documentElement.appendChild(iframe);
  document.body.style.overflow = "hidden";
  block.innerHTML = "";
}