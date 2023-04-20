function AND(a, b) {
    return a && b;
  }

  function OR(a, b) {
    return a || b;
  }

  function NOT(a) {
    return !a;
  }
 
  function EQUIVALENCE(a, b) {
    return a === b;
  }

  function XOR(a, b) {
    return a !== b;
  }

  function NAND(a, b) {
    return !AND(a, b);
  }

  function NOR(a, b) {
    return !OR(a, b);
  }

  function showTable() {
    var selectedFunction = document.getElementById("functionSelect").value;
    var table = [[]];
    var result = [];

    switch(selectedFunction) {
      case "AND":
        func = AND;
        break;
      case "OR":
        func = OR;
        break;
      case "NOT":
        func = NOT;
        break;
      case "EQUIVALENCE":
        func = EQUIVALENCE;
        break;
      case "XOR":
        func = XOR;
        break;
      case "NAND":
        func = NAND;
        break;
      case "NOR":
        func = NOR;
        break;
      default:
        func = OR;
    }

    for (var a of [1, 0]) {
      for (var b of [1, 0]) {
        table.push([a, b]);
      }
    }

    for (var row of table.slice(1)) {
      result.push(func(row[0], row[1]));
    }

    var tableHTML = "<tr><th>A</th><th>B</th><th> РЕЗУЛЬТАТ</th></tr>";
    for (var i = 0; i < table.length - 1; i++) {
      tableHTML += "<tr><td>" + table[i + 1][0] + "</td><td>" + table[i + 1][1] + "</td><td>" + result[i] + "</td></tr>";
    }

    document.getElementById("truthTable").innerHTML = tableHTML;
  }