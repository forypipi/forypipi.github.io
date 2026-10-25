"use strict";

const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    let visible = 0;
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    projects.forEach(project => {
      project.hidden = category !== "all" && project.dataset.category !== category;
      if (!project.hidden) visible += 1;
    });
    document.querySelector("#filter-status").textContent = `当前显示 ${visible} 项研究工作`;
  });
});

const dialog = document.querySelector("#image-dialog");
const dialogImage = document.querySelector("#dialog-image");
document.querySelectorAll("[data-image]").forEach(button => {
  button.addEventListener("click", () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.querySelector("img").alt;
    document.querySelector("#image-caption").textContent = button.dataset.caption;
    dialog.showModal();
  });
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

document.querySelector("#copy-email").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText("orfu@stu.pku.edu.cn");
    status.textContent = "邮箱已复制。期待与你交流！";
  } catch {
    status.textContent = "请手动复制邮箱：orfu@stu.pku.edu.cn";
  }
});
