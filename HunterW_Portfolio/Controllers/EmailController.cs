using HunterW_Portfolio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace HunterW_Portfolio.Controllers
{
    public class EmailController : Controller
    {
        // GET: Email
        public ActionResult Contact()
        {
            EmailModel model = new EmailModel();
            return View(model);
        }

        // POST: Email
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<ActionResult> Contact(EmailModel model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            var from = $"{model.FromEmail}<{WebConfigurationManager.AppSettings["emailto"]}>";

        //            var email = new MailMessage(from, WebConfigurationManager.AppSettings["emailto"])
        //            {
        //                Subject = $"Blog Site Message From {model.FromName} - {model.Subject}",
        //                Body = model.Body,
        //                IsBodyHtml = true
        //            };

        //            var svc = new PersonalEmail();
        //            await svc.SendAsync(email);

        //            return View(new EmailModel());
        //        }
        //        catch (Exception ex)
        //        {
        //            Console.WriteLine(ex.Message);
        //            await Task.FromResult(0);
        //        }
        //    }
        //    return View(model);
        //}
    }
}