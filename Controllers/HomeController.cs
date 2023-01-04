using Microsoft.AspNetCore.Mvc;
using SignalRHub.Models;
using System.Diagnostics;

namespace SignalRHub.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GroupChat()
        {
            return View();
        }

        
    }
}