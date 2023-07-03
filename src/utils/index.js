export const xmlToJson = (xmlString) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, 'text/xml');
    return xmlToConvert(xml);
};

export const xmlToConvert = (xml) => {
    const jsonObj = {};
    
    if (xml.nodeType === Node.ELEMENT_NODE) {
      if (xml.attributes.length > 0) {
        jsonObj['@attributes'] = {};
  
        for (let i = 0; i < xml.attributes.length; i++) {
          const attribute = xml.attributes[i];
          jsonObj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === Node.TEXT_NODE) {
      jsonObj['#text'] = xml.nodeValue;
    }
  
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const childNode = xml.childNodes[i];
        const nodeName = childNode.nodeName;
  
        if (jsonObj[nodeName] === undefined) {
          jsonObj[nodeName] = xmlToConvert(childNode);
        } else {
          if (!Array.isArray(jsonObj[nodeName])) {
            jsonObj[nodeName] = [jsonObj[nodeName]];
          }
          jsonObj[nodeName].push(xmlToConvert(childNode));
        }
      }
    }
  
    return jsonObj;
};

export const isReloadResource = (dateString) => {
  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;
  var year = parseInt(parts[2], 10);
  var initialDate = new Date(year, month, day);
  var currentDate = new Date();
  var difference = currentDate - initialDate;
  var daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
  return daysPassed >= 1;
};