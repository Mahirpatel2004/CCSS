import { Controller, Get, Param, NotFoundException } from '@nestjs/common';

// Sample data (replace this with your actual data source)
const sampleData = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' }
];

@Controller('items')
export class ItemsController {
  // Define a GET endpoint to fetch all items
  @Get()
  findAll(): any[] {
    // Return the sample data
    return sampleData;
  }

  // Define a GET endpoint to fetch a single item by ID
  @Get(':id')
  findOne(@Param('id') id: string): any {
    const itemId = parseInt(id, 10);
    const item = sampleData.find(item => item.id === itemId);
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }
}
