router.get("/:id", async (request, response) => {
    var { id } = request.params;
    var data = {};
    /* truy vấn dữ liệu từ database -> data */
    response.render("article/action/view.ejs", { data });
 });