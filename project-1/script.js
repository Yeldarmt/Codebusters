function clicked(str) {
    x = document.getElementById('groupid');
    // document.write(x.children[0].id, str);
    var i;
    // console.log(x.children);
    for(i=0;i<x.children.length;i++) {
        let s='id'+ x.children[i].id;
        if (x.children[i].id === str){
            document.getElementById(s).style.display='block';
            document.getElementById(str).style.color="#FF5656";
            document.getElementById(str).style.borderBottom="2px solid #FF5656";
        }
        else {
            document.getElementById(s).style.display='none';
            document.getElementById(x.children[i].id).style.color="white";
            document.getElementById(x.children[i].id).style.borderBottom="none";
        }
    }
}
