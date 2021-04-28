---
id: importing-data
title: Importing data
---

## Importing Data Into Vertex

To import 3D data into the platform, use the [Filestore APIs](/api/beta#/filestore) to upload models.
For testing purposes, you can also import data through the [Vertex Client Application](https://app.vertexvis.com/) if
you have access to a standard user account.
Status APIs provide updates as the data imports.
The platform currently supports models up to 5GB in size.
See the table below for supported file types.

## Supported File Types

Vertex currently supports the following file formats.
If you need support for another type, just let us know.
Support for new formats is added regularly.

|    File type     |                  File extension                  |         Versions          |
| :--------------: | :----------------------------------------------: | :-----------------------: |
|      3DXML       |                      .3DXML                      |            All            |
|      CATIA       | .CATProduct\*, .CATPart, .model, .CATShape, .cgr |            4-6            |
|    Creo/Pro-E    |         .asm\*, .prt, .neu Pro/Engineer          |     19.0 to Creo 7.0      |
|       IFC        |                       .ifc                       |            2-4            |
|       IGES       |                   .iges, .igs                    |         Up to 5.3         |
|     Inventor     |                   .iam\*, .ipt                   |        Up to 2021         |
|        JT        |                     .jt\*\*                      |         8.0-10.5          |
| NX - Unigraphics |                       .prt                       |      11-12, and 1926      |
|       OBJ        |                       .obj                       |            All            |
|    Parasolid     |            .x_b, .x_t, .xmt, .xmt_txt            |         Up to 32          |
|      Revit       |                       .rvt                       |         2015-2021         |
|    Solid Edge    |                   .asm\*, .par                   | 19-20, ST1-ST10, and 2021 |
|    SolidWorks    |                .sldasm\*, .sldprt                |          97-2021          |
|       STEP       |                   .step, .stp                    |    AP203, AP214, AP242    |
|       STL        |                       .stl                       |            N/A            |

\* If you want to import an entire assembly as a single file, you need to take an additional step to [prepare it for Vertex](https://help.vertexvis.com/hc/en-us/articles/360014163734). This is so Vertex can properly import all of the data that's included in an assembly file.

\*\* If your JT or NX file is a shattered JT or an NX assembly, and you want to import the entire assembly as a single file, [prepare it for Vertex](https://help.vertexvis.com/hc/en-us/articles/360014163734). If it's a monolithic JT assembly, do not prep it: you can import it now.
