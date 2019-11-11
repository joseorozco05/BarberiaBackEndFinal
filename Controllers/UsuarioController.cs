using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BarberiaBackEnd.Models;

namespace BarberiaBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly BarberiaContext _context;
        public UsuarioController(BarberiaContext context)
        {
            _context = context;
            if (_context.UsuarioItems.Count() == 0)
            {

                _context.UsuarioItems.Add(new UsuarioItem { NomCompleto = "PRUEBA", Telefono = 0, Direccion = "Calle 2", Sexo = "M/F", Edad = 0 });
                _context.UsuarioItems.Add(new UsuarioItem { NomCompleto = "PRUEBA", Telefono = 0, Direccion = "Calle 2", Sexo = "M/F", Edad = 0  });
                _context.SaveChanges();
            }
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsuarioItem>>> GetUsuarioItems()
        {
            return await _context.UsuarioItems.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioItem>> GetUsuarioItem(int id)
        {
            var usuarioItem = await _context.UsuarioItems.FindAsync(id);
            if (usuarioItem == null)
            {
                return NotFound();
            }
            return usuarioItem;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<UsuarioItem>> PostUsuarioItem(UsuarioItem item)
        {
            _context.UsuarioItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUsuarioItem), new { id = item.Id }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuarioItem(int id, UsuarioItem
        item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuarioItem(int id)
        {
            var UsuarioItem = await
            _context.UsuarioItems.FindAsync(id);
            if (UsuarioItem == null)
            {
                return NotFound();
            }
            _context.UsuarioItems.Remove(UsuarioItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}