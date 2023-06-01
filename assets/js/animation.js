const legal = document.querySelector('#legal')
const contacto=document.querySelector('#contacto')

legal.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Aviso Legal ',
        text: 'El presente aviso legal establece las condiciones de uso de la página web "Faculta Industrial USTA" (en adelante, "la página web"). Por favor, lea detenidamente los términos y condiciones antes de utilizarla. Al acceder y utilizar la página web, usted acepta y se compromete a cumplir con los siguientes términos y condiciones. Propósito académico y formativo: La página web "Faculta Industrial USTA" ha sido creada con la mera intención académica y formativa para la mejora del ambiente estudiantil. Su objetivo principal es proporcionar recursos, información y herramientas educativas para ayudar a los estudiantes de la Facultad Industrial de la Universidad Santo Tomás(USTA) en su desarrollo académico y personal. La página web no pretende sustituir ni reemplazar la educación formal impartida por la USTA, sino complementarla y brindar apoyo adicional. Exactitud de la información: Aunque nos esforzamos por proporcionar información precisa y actualizada, no garantizamos la exactitud, integridad o relevancia de la información contenida en la página web. La información proporcionada es de carácter general y puede no ser adecuada para situaciones específicas. Los usuarios son responsables de verificar la validez y aplicabilidad de la información antes de tomar cualquier decisión o acción basada en ella. Uso responsable: Los usuarios deben utilizar la página web "Faculta Industrial USTA" de manera responsable y respetar los derechos de propiedad intelectual y otros derechos legales. No se permite utilizar la página web para actividades ilegales, difamatorias, obscenas, ofensivas o que puedan causar daño o perjuicio a terceros. Asimismo, los usuarios se comprometen a no realizar acciones que puedan comprometer la seguridad o el funcionamiento de la página web. Propiedad intelectual: Todos los derechos de propiedad intelectual sobre el contenido de la página web "Faculta Industrial USTA", incluyendo pero no limitado a textos, imágenes, gráficos, logotipos, videos y software, son propiedad exclusiva de los creadores de la página web o se utilizan con el permiso de sus respectivos propietarios. Queda prohibida cualquier forma de reproducción, distribución, modificación o utilización no autorizada del contenido sin el consentimiento previo por escrito de los titulares de los derechos. Enlaces a terceros: La página web "Faculta Industrial USTA" puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente como una conveniencia para los usuarios y no implican ningún respaldo, aprobación o responsabilidad por parte de los creadores de la página web respecto al contenido de dichos sitios web. Los usuarios acceden a los sitios web de terceros bajo su propio riesgo y están sujetos a los términos y condiciones de uso de dichos sitios. Limitación de responsabilidad: En la medida permitida por la ley, los creadores de la página web "Faculta Industrial USTA" no serán responsables de ningún daño directo, indirecto, incidental, consecuente o especial que surja del uso o la imposibilidad de uso de la página web, incluyendo, pero no limitado a, pérdida de beneficios, datos o daños a la reputación. Modificaciones: Los creadores de la página web "Faculta Industrial USTA" se reservan el derecho de modificar, actualizar o interrumpir la página web, así como los términos y condiciones de uso, en cualquier momento y sin previo aviso. Se recomienda a los usuarios estar atentos a los cambios realizados. Al utilizar la página web "Faculta Industrial USTA", usted acepta y reconoce que ha leído y comprendido este aviso legal, y que está de acuerdo con todos los términos y condiciones establecidos. En caso de no estar de acuerdo con alguno de estos términos, se le solicita que se abstenga de utilizar la página web.Fecha de última actualización: 28/05/23.',
    })

})

contacto.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Información de Contacto',
        text: 'Campus Aguas Claras: Carrera 22 con Calle 1a - Vía Puerto López / Campus Loma Linda: Carrera 48 N° 19 - 05 Sur - Vía Acacías Villavicencio, Meta Notificaciones Judiciales y/o Extrajudiciales. El siguiente correo es de uso exclusivo para juzgados, tribunales y altas cortes o requerimientos de autoridades administrativas: ofjuridicavillavo@usantotomas.edu.co',
    })

})
