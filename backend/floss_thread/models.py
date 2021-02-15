from django.db import models

class FlossThread(models.Model):
    
    class Manufacturer(models.TextChoices):
        DMC = 'dmc', 'DMC'
        GAMMA = 'gamma', 'Gamma'
        ANCHOR = 'anchor', 'Anchor'
        MADEIRA = 'madeira', 'Madeira'
    
    manufacter = models.TextField(verbose_name='Manufacturer', choices=Manufacturer.choices, default=Manufacturer.DMC)
    color = models.TextField(verbose_name='Color', max_length=64)

