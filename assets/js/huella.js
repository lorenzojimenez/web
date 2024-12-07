function calcularHuellaDeCarbono() {  
    const form = document.getElementById('huellaForm');  
    const producto = form.producto.value;  
    const duracion = parseFloat(form.duracion.value);  
    const actividad1 = parseFloat(form.actividad1.value);  
    const actividad2 = parseFloat(form.actividad2.value);  
    const actividad3 = parseFloat(form.actividad3.value);  
    const electricidad1 = parseFloat(form.electricidad1.value);  

    const factorCarbonoElectricidad = 0.45;  

    if (duracion < 0 || actividad1 < 0 || actividad2 < 0 || actividad3 < 0 || electricidad1 < 0) {  
      alert("Los valores no pueden ser negativos.");  
      return;  
    }  

    const huellaCarbonoTotal =  
      (actividad1 + actividad2 + actividad3) * duracion +  
      (electricidad1 * factorCarbonoElectricidad);  

    document.getElementById('resultado').innerHTML = `La huella de carbono estimada para ${producto} es: ${huellaCarbonoTotal.toFixed(2)} kg CO2`;  

    document.getElementById('exportarPdf').disabled = false;  
  } 



  function exportarAPDF() {  
    const { jsPDF } = window.jspdf; // Asegúrate de que jsPDF esté disponible.

    const doc = new jsPDF();  
    const resultado = document.getElementById('resultado').innerText;  

    // Verifica si hay contenido en el resultado.
    if (!resultado) {  
        alert("Primero calcula la huella de carbono antes de exportar el PDF.");  
        return;  
    }  

    // Configurar el contenido del PDF.
    doc.setFont("helvetica", "bold");  
    doc.setFontSize(16);  
    doc.text("Resultados de la Huella de Carbono", 20, 20);  

    doc.setFont("helvetica", "normal");  
    doc.setFontSize(12);  
    const resultadoLines = doc.splitTextToSize(resultado, 180);  
    doc.text(resultadoLines, 20, 30);  

    doc.setFontSize(10);  
    doc.text("Generado por el Sistema de Cálculo de Huella de Carbono", 20, doc.internal.pageSize.getHeight() - 10);  
    doc.setFontSize(8);  
    doc.text("© 2024 Todos los derechos reservados.", 20, doc.internal.pageSize.getHeight() - 5);  

    // Guarda el PDF.
    doc.save("huella_de_carbono.pdf");  
}