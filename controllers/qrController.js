import qrcode from "qrcode";

export async function generateQR(req, res) {
    console.log(req.body);
    
    const { url } = req.body;
    const expRegURL = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;

    if(!url){
        res.send({message: 'Error: Url empty'});
        return res.redirect('back');
    }


    if(!url.match(expRegURL)){
        res.send({message: 'Error: Url invalidate'});
        return res.redirect('back');
    }

    await qrcode.toDataURL(url, (err, src) => {
        res.json({
            message: 'Succefull', 
            image: src
        });
    });
}
