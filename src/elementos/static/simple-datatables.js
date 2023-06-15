let dataTable = new simpleDatatables.DataTable(
  document.getElementById("table1")
)

// Mover el selector "per page dropdown" fuera de la etiqueta
// para hacerlo funcionar con TailwindCSS. Agregar clases de TailwindCSS.
function adaptPageDropdown() {
  const selector = dataTable.wrapper.querySelector(".dataTable-selector")
  selector.parentNode.parentNode.insertBefore(selector, selector.parentNode)
  selector.classList.add(...["block", "pl-3", "pr-10", "py-2", "text-base", "border-gray-300", "focus:outline-none", "focus:ring-1", "focus:ring-indigo-500", "focus:border-indigo-500", "sm:text-sm", "rounded-md"])
}

// Agregar clases de TailwindCSS a los elementos de paginación
function adaptPagination() {
  const paginations = dataTable.wrapper.querySelectorAll(
    "ul.dataTable-pagination-list"
  )

  for (const pagination of paginations) {
    pagination.classList.add(...["flex", "justify-between"])
  }

  const paginationLis = dataTable.wrapper.querySelectorAll(
    "ul.dataTable-pagination-list li"
  )

  for (const paginationLi of paginationLis) {
    paginationLi.classList.add("mx-1")
  }

  const paginationLinks = dataTable.wrapper.querySelectorAll(
    "ul.dataTable-pagination-list li a"
  )

  for (const paginationLink of paginationLinks) {
    console.log(paginationLink);
    paginationLink.classList.add(...["px-3", "py-1", "border", "border-gray-300", "rounded","justify-end"])
  }
}

// Agregar clases de TailwindCSS a los elementos relevantes
function adaptElements() {
  // Alinear verticalmente el texto "Showing entries" con los botones de paginación
  const info = dataTable.wrapper.querySelector(".dataTable-info")
  info.parentNode.classList.add("flex", "items-center")

  // Mover el cuadro de búsqueda a la derecha del selector "per page dropdown"
  const top = dataTable.wrapper.querySelector(".dataTable-top")
  top.classList.add("flex", "justify-between")
}

const refreshPagination = () => {
  adaptPagination()
}

// Patchear el selector "per page dropdown" y la paginación después de que se haya renderizado la tabla
dataTable.on("datatable.init", () => {
  adaptPageDropdown()
  refreshPagination()
  adaptElements()
})
dataTable.on("datatable.update", () => {
  refreshPagination()
  adaptElements()
})
dataTable.on("datatable.sort", () => {
  refreshPagination()
  adaptElements()
})

// Re-patchear la paginación después de que se haya cambiado la página
dataTable.on("datatable.page", adaptPagination)
