const loginTable = () => {
    if (document.location.pathname == '/admin/table.html' && !/login=true/g.test(document.cookie) || 
    document.location.pathname != '/admin/table.html' && document.location.pathname != '/admin/') {
        document.location.href = `${document.location.protocol}//${document.location.host}/admin/`;
    }

};

export { loginTable };