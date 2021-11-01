using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using QuanLyBanHang.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuanLyBanHang
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();

            //Add cors
            services.AddCors(options =>
            {
                options.AddPolicy("EnableCORS", builder =>
                {
                    builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            // Add Authentication
            services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme= JwtBearerDefaults.AuthenticationScheme;
            })
              .AddJwtBearer(options=> {
                  options.TokenValidationParameters = new TokenValidationParameters
                  {
                    
                      ValidateIssuer = true,   // ma hop le neu may chu la noi tao ra ma nay
                      ValidateAudience =true, // nguoi nhan hop le
                      ValidateLifetime=true, // thoi han dang ky chua het han
                      ValidateIssuerSigningKey=true, // Key hop le va duoc may chu tin cay

                      // cung cap gia tri cho doi tuong su co hop le
                      ValidIssuer = "https://localhost:5001",
                      ValidAudience = "https://localhost:5001", 
                      IssuerSigningKey =new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345")),
                  };
              });

            //services.AddControllers();

            // add DbContext
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<BookStoreContext>(options => options.UseSqlServer(connectionString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            //use cors
            app.UseCors("EnableCORS");

            app.UseRouting();
            
            //use authentication
            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
