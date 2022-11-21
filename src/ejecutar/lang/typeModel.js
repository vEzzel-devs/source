export const argCheck = ({
    "zeros" : ["ConstantNode"],
    "ones" : ["ConstantNode"],
    "rec" : ["ConstantNode", "SymbolNode"],
    "range" : ["ConstantNode", "ConstantNode", "ConstantNode"],
    "map" : ["SymbolNode", "SymbolNode"],
    "place" : ["SymbolNode", "ConstantNode", "ConstantNode", "ConstantNode"],
    // implement colors soon!
    //"color" : ["SymbolNode", "ConstantNode", "ConstantNode", "ConstantNode"],
    "text" : ["ConstantNode", "ConstantNode"],
    "display" : ["SymbolNode", "ConstantNode"],
    "button" : ["ConstantNode", "SymbolNode"],
    "input" : ["ConstantNode", "ConstantNode"],
    "cond" : ["compile", "SymbolNode", "SymbolNode"],
    "func" : ["SymbolNode", "compile"],
    "set" : ["SymbolNode", "compile"],
    "move" : ["SymbolNode", "SymbolNode"],
    "hide" : ["SymbolNode"],
    "show" : ["SymbolNode"]
});