//x1, y1, x2, y2
function canReach(sx, sy, tx, ty) {
    // Write your code here
    if(sx>tx || sy>ty)
            return "No";
    if(sx==tx && sy==ty)
            return "Yes";
    if(tx>ty){
        let sub=(tx-sx)/ty;
        if(sub==0)
            return "No";
        if (canReach(sx,sy,tx-sub*ty,ty))
            return "Yes"
    }
    else
    {
        let sub=(ty-sy)/tx;
        if(sub==0)
                return "No";
            if (canReach(sx,sy,tx,ty-sub*tx)){
                return "Yes"
            }
        }
}