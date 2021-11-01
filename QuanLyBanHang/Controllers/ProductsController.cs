using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuanLyBanHang.Data;
using QuanLyBanHang.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace QuanLyBanHang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private BookStoreContext _context;
        public ProductsController(BookStoreContext context)
        {
            _context = context;
        }


        // Get san pham
        [HttpGet("GetProducts")]
        public IActionResult Get()
        {

            try
            {
                var products = _context.Products.ToList();
                if(products.Count==0)
                {
                    return StatusCode(404,"Product was not found");
                }
                return  Ok(products);

            }
            catch (Exception)
            {
                return  StatusCode(500,"An error has occurred ");
            }
        }

        // Tao moi san pham
        [HttpPost("CreateProduct")]
        public IActionResult Create([FromBody] ProductRequest request)
        {
            Product product = new Product();
            product.ProductId =request.ProductId;
            product.ProductName = request.ProductName;
            product.Price = request.Price;
            product.Description = request.Description;

            try
            {
                // Products is DbSet
                _context.Products.Add(product);
                _context.SaveChanges();

            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred ");
            }

            //Get all product
            var products = _context.Products.ToList();
            return Ok(products);
        }

        // Edit san pham
        [HttpPut("UpdateProduct")]
        public IActionResult Update([FromBody] ProductRequest request)
        {
           
            try
            {
                var product = _context.Products.FirstOrDefault(x => x.ProductId ==request.ProductId);
                if (product == null)
                {
                    return StatusCode(404, "Product was not found");
                }

                
                product.ProductName = request.ProductName;
                product.Price =request.Price;
                product.Description = request.Description;

                _context.Entry(product).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred ");
            }

            //Get all product
            var products = _context.Products.ToList();
            return Ok(products);
        }

        //Xoa san pham
        [HttpDelete("DeleteProduct/{Id}")]
        public IActionResult Delete([FromRoute]int Id)
        {
            try
            {
                var product = _context.Products.FirstOrDefault(x => x.ProductId == Id);
                if (product == null)
                {
                    return StatusCode(404, "Product was not found");
                }

                _context.Entry(product).State = EntityState.Deleted;
                _context.SaveChanges();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error has occurred ");
            }

            //Get all product
            var products = _context.Products.ToList();
            return Ok(products);
        }

    }
}
