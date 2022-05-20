const loginTable = () => {
    if ((document.location.pathname == '/admin/table.html' || document.location.pathname == '/dist/admin/table.html' )&&
     !/login=true/g.test(document.cookie)) {
        if (/dist/g.test(document.location.pathname)) {
            document.location.href = `${document.location.protocol}//${document.location.host}/dist/admin/`;
        } else {
            document.location.href = `${document.location.protocol}//${document.location.host}/admin/`;
        }  
    }
};

export { loginTable };