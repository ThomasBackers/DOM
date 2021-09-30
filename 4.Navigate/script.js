const ol = document.querySelector("ol");
ol.insertBefore(ol.lastElementChild, ol.firstElementChild);

const swapNodes = (node1, node2) => {
    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
}

swapNodes(document.querySelectorAll("h2")[1], document.querySelectorAll("h2")[2]);

document.querySelectorAll("section")[-0].remove();
