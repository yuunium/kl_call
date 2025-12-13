fetch("../header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
     // ★ ここからが本体
    const checkCall = document.getElementById("showCalls");
    const callElements = document.getElementsByClassName("call");
    checkCall.addEventListener("change", () => {
        for (const el of callElements) {
        el.style.display = checkCall.checked ? "inline" : "none";
        }
    });
    // 初期状態も反映
    for (const el of callElements) {
        el.style.display = checkCall.checked ? "inline" : "none";
        }
    });