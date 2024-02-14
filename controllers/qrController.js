import qrcode from "qrcode";

export async function generateQR(req, res) {
    const { url_text } = req.body;
    const expRegURL = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;

    if(!url_text){
        res.send({message: 'Error: Url empty'});
        return res.redirect('back');
    }

    if(!url_text.match(expRegURL)){
        res.send({message: 'Error: Url invalidate'});
        return res.redirect('back');
    }

    await qrcode.toDataURL(url_text, (err, src) => {
        res.json({
            message: 'Succefull', 
            image: src
        });
    });
}
