document.addEventListener("DOMContentLoaded", function () {
    const items = [
        { name: "Roblox Sword", price: "50 Robux", description: "Legendary sword for battles." },
        { name: "Minecraft Account", price: "$15", description: "Java edition account." }
    ];

    const container = document.getElementById("items-container");
    if (container) {
        items.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><strong>${item.price}</strong>`;
            div.style.border = "1px solid #ccc";
            div.style.padding = "1rem";
            div.style.marginBottom = "1rem";
            container.appendChild(div);
        });
    }
});
