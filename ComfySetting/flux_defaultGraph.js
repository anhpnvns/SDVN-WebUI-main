const defaultGraph = {
  "last_node_id": 69,
  "last_link_id": 114,
  "nodes": [
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1178,
        "1": 91
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 66
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 88
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1422,
        "1": 88
      },
      "size": {
        "0": 356.08502197265625,
        "1": 499.8143310546875
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9
        }
      ],
      "outputs": [],
      "properties": {
        "Node name for S&R": "SaveImage"
      },
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 69,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 408,
        "1": 89
      },
      "size": {
        "0": 400,
        "1": 200
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 111
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            112,
            114
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "Actual image of a smiling Vietnamese girl. With both hands she was holding a notice board with the word \"FluxAI by SDVN.ME\" large in the middle. Photos have high detail"
      ]
    },
    {
      "id": 53,
      "type": "EmptyLatentImage",
      "pos": {
        "0": 499,
        "1": 347
      },
      "size": {
        "0": 303.3410339355469,
        "1": 111.14437103271484
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            85
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        768,
        1152,
        1
      ]
    },
    {
      "id": 44,
      "type": "KSampler",
      "pos": {
        "0": 837,
        "1": 93
      },
      "size": {
        "0": 318.3961181640625,
        "1": 487.5167236328125
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 89
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 112
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 114
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 85,
          "slot_index": 3
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            66
          ],
          "slot_index": 0,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        1,
        "randomize",
        20,
        1,
        "euler",
        "simple",
        1
      ]
    },
    {
      "id": 68,
      "type": "Note",
      "pos": {
        "0": 65,
        "1": 237
      },
      "size": [
        315.7266486933699,
        143.80173860655128
      ],
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "Flux text - to - img workflow\n\nComfyUI Colab:\n- Creator: stablediffusion.vn\n- Website: sdvn.me | comfy.vn | fluxai.vn\n- Sub Web: trainlora.vn | shakker.vn\n- Document: bit.ly/sdvn-lib\n- Skills training: hungdiffusion.com"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 52,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 63,
        "1": 89
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            89
          ],
          "slot_index": 0,
          "shape": 3
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            111
          ],
          "slot_index": 1,
          "shape": 3
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            88
          ],
          "slot_index": 2,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "Checkpoint/Flux_dev_v1-fp8.safetensors"
      ]
    }
  ],
  "links": [
    [
      9,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      66,
      44,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      75,
      10,
      0,
      8,
      1,
      "VAE"
    ],
    [
      76,
      12,
      0,
      44,
      0,
      "MODEL"
    ],
    [
      77,
      11,
      0,
      48,
      0,
      "CLIP"
    ],
    [
      78,
      10,
      0,
      30,
      1,
      "VAE"
    ],
    [
      79,
      12,
      0,
      51,
      0,
      "MODEL"
    ],
    [
      80,
      11,
      0,
      51,
      1,
      "CLIP"
    ],
    [
      81,
      10,
      0,
      51,
      2,
      "VAE"
    ],
    [
      85,
      53,
      0,
      44,
      3,
      "LATENT"
    ],
    [
      88,
      52,
      2,
      8,
      1,
      "VAE"
    ],
    [
      89,
      52,
      0,
      44,
      0,
      "MODEL"
    ],
    [
      111,
      52,
      1,
      69,
      0,
      "CLIP"
    ],
    [
      112,
      69,
      0,
      44,
      1,
      "CONDITIONING"
    ],
    [
      114,
      69,
      0,
      44,
      2,
      "CONDITIONING"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1.2100000000000002,
      "offset": [
        12.271902533136819,
        31.158430981511383
      ]
    }
  },
  "version": 0.4
}