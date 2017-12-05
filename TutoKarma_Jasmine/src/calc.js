function calculatrice(signe, gauche, droite) {
    if (typeof gauche === 'number' && typeof droite === 'number') {
           if (gauche>=0 && droite<430 && droite!=0) {
            switch (signe) {
                case "*":
                    return gauche*droite;
                case "+":
                    return gauche+droite;
                case "-":
                    return gauche-droite;
                case "/":
                    return gauche/droite;
                default:
                    return null;
            } 
        } else {
               return null;
        }
    } else{
        return null;
    }
}
