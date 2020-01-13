using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestPartialView.Models;

namespace TestPartialView.Controllers
{
    public class HomeController : Controller
    {
        KeyWordContainer keywordContainer = null;
        public HomeController()
        {
            keywordContainer = new KeyWordContainer();
        }
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetData(string[] names)
        {
            keywordContainer.Keywords.AddRange(names);
            Response.StatusCode = (int)System.Net.HttpStatusCode.OK;
            return Json(new { status = "success", message = "Keyword added successfully." }, JsonRequestBehavior.AllowGet);
        }
    }
}