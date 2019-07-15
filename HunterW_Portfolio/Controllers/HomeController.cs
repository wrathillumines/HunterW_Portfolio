﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HunterW_Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult index()
        {
            return View();
        }

        public ActionResult about()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult portfolio()
        {
            return View();
        }

        public ActionResult singleproject()
        {
            return View();
        }

        public ActionResult codingchallenges()
        {
            return View();
        }

        public ActionResult notfound()
        {
            return View();
        }

    }
}