/*Bloco_Onload: {
    onload = () => {
        let bars = document.getElementById("bars");
        let bool = 0;
        bars.onclick = () => {
            if(bool == 0){
                document.getElementById("dropdown").style = `height: 100% !important;`;
                ++bool;
            }
            else{
                document.getElementById("dropdown").style = `height: 0% !important;`
                --bool;
            }
        }
    }
}*/
