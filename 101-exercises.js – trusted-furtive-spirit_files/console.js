window.addEventListener("load", (e) => {
  try {
    const token = JSON.parse(localStorage.cachedUser).persistentToken
    const project = document.location.search.substring(1)
    const url = `https://api.${document.location.host}/${project}/console/${token}/`

    const iframe = document.createElement("iframe")
    iframe.src = url
    document.body.appendChild(iframe)
    iframe.contentWindow.focus();
  } catch (e) {
    const pre = document.createElement("pre")
    pre.innerText = "You are not authorized to access the Glitch Console."
    document.body.appendChild(pre)
  }
})
