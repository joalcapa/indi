import axios from 'axios';

const apiCall = async (config) => {
    try {
        const { isXml = false } = config;
        const response = await axios(config);
        console.log('aa', response.data)

        if (isXml) {
            const parser = new DOMParser();

    // Analizar el XML
    const xmlDoc = parser.parseFromString(response.data, 'text/xml');

    // Convertir el XML a JSON
    const jsonData = xmlToJson(xmlDoc);

    console.log("tojson", jsonData)

return Promise.resolve(jsonData);

        } 

        return Promise.resolve(JSON.parse(response.data.contents));
    } catch (error) {
    }
};


function xmlToJson(xml) {
    // Crear el objeto JSON vacío
    const jsonObj = {};
  
    if (xml.nodeType === Node.ELEMENT_NODE) {
      // Si es un elemento, procesar los atributos
      if (xml.attributes.length > 0) {
        jsonObj['@attributes'] = {};
  
        for (let i = 0; i < xml.attributes.length; i++) {
          const attribute = xml.attributes[i];
          jsonObj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === Node.TEXT_NODE) {
      // Si es un nodo de texto, establecer el contenido del JSON
      jsonObj['#text'] = xml.nodeValue;
    }
  
    // Procesar los hijos recursivamente
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const childNode = xml.childNodes[i];
  
        const nodeName = childNode.nodeName;
  
        if (jsonObj[nodeName] === undefined) {
          jsonObj[nodeName] = xmlToJson(childNode);
        } else {
          if (!Array.isArray(jsonObj[nodeName])) {
            jsonObj[nodeName] = [jsonObj[nodeName]];
          }
          jsonObj[nodeName].push(xmlToJson(childNode));
        }
      }
    }
  
    return jsonObj;
  }

export default apiCall;