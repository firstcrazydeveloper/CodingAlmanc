using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CodingAlmanacWebAPI.Models
{
    public class WebSiteContent
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string Keyword { get; set; }
        public string Link { get; set; }
        public List<string> ImageLink { get; set; }

    }
}