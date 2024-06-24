import qrcode from "qrcode";

export async function generateQR(req, res) {
    const { url } = req.body;
    const expRegURL = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    if(!url){
        res.send({message: 'Error: Url empty'});
    }

    if(!url.match(expRegURL)){
        res.send({message: 'Error: Url invalidate'});
    }

    await qrcode.toDataURL(url, (err, src) => {
        res.json({
            message: 'Succefull', 
            image: src
        });
    });
}
