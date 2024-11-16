    // Função para mostrar a seção correspondente e esconder as outras
    function showSection(sectionId) {
      // Primeiro, oculta todas as seções
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Agora, exibe a seção correspondente
      const activeSection = document.getElementById(sectionId);
      if (activeSection) {
        activeSection.classList.add('active');
      }
    }

    // Exibir a primeira seção ao carregar a página
    document.addEventListener('DOMContentLoaded', function() {
      showSection('home');
    });