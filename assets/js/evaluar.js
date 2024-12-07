

function generarPDF() {
    // Crear una instancia del documento PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // Obtener los valores de los inputs
    const nombreProyecto = document.querySelector('input[type="nombreProyecto"]').value;
    const industria = document.querySelector('input[type="industria"]').value;
    const objetivo = document.querySelector('input[type="objetivo"]').value;
    const duracion = document.querySelector('input[type="duración"]').value;
    const ubicacion = document.querySelector('input[type="ubicacion"]').value;
    const presupuestoIni = document.querySelector('input[type="presupuestoIni"]').value;
   

    // Añadir texto al PDF con los valores
    doc.text('Evaluación del Proyecto Sustentable', 10, 10);
    doc.text(`Nombre del Proyecto: ${nombreProyecto}`, 10, 20);
    doc.text(`Industria: ${industria}`, 10, 30);
    doc.text(`Objetivo: ${objetivo}`, 10, 40);
    doc.text(`Duración Estimada: ${duracion}`, 10, 50);
    doc.text(`Ubicación Geográfica: ${ubicacion}`, 10, 60);
    doc.text(`Presupuesto Inicial: ${presupuestoIni}`, 10, 70);
    
    // Guardar el PDF
    doc.save('evaluacion_proyecto_sustentable.pdf');
  }
  