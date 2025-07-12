using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UserMicroservice.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpGet("secure")]
        public IActionResult SecureData()
        {
            return Ok("Bu sadece giriş yapmış kullanıcılar içindir.");
        }
    }
}
