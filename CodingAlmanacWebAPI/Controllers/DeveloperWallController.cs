using CodingAlmanacWebAPI.Models;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CodingAlmanacWebAPI.Controllers
{
    [RoutePrefix("API/DevWall")]
    public class DeveloperWallController : ApiController
    {

        //public WebSiteContent GetShareLikDetails(string Link)
        //{
        //    HtmlDocument doc = new HtmlDocument();
        //    doc.Load(Link);
            
        //   foreach(HtmlNode link in doc.DocumentNode.SelectNodes("//a[@href]"))
        //    {
        //            //HtmlAttribute att = link["href"];
        //            //att.Value = FixLink(att);
        //    }
        //}
    }
}
