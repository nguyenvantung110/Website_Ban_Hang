using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuanLyBanHang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Authorize] // uy quyen chi nhung ai da dang nhap moi co the truy cap
        public IEnumerable<string> Get()
            => new string[] { "John Doe", "Jan Doe" }; 
    }
}
